-- 코드를 작성해주세요
with front as (
    select code
    from skillcodes
    where category = 'Front End'
)
select distinct id, email, first_name, last_name
from developers d
join front f on (d.skill_code & f.code) <> 0
order by id asc;