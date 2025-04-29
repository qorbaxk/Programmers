with 
front as (
    select sum(code) as code_sum
    from skillcodes
    where category = 'Front End'
),
python as (
    select code as code_python
    from skillcodes
    where name = 'Python'
),
csharp as (
    select code as code_csharp
    from skillcodes
    where name = 'C#'
)
select
    case
        when (d.skill_code & f.code_sum) > 0 and (d.skill_code & p.code_python) > 0 then 'A'
        when (d.skill_code & c.code_csharp) > 0 then 'B'
        when (d.skill_code & f.code_sum) > 0 then 'C'
        else null
    end as GRADE,
    d.id,
    d.email
from developers d
cross join front f
cross join python p
cross join csharp c
having GRADE is not null
order by GRADE asc, d.id asc;
