# -- 코드를 작성해주세요
with recursive generation as (
    select id, parent_id, 1 as gen
    from ecoli_data
    where parent_id is null
    
    union all
    
    select e.id, e.parent_id, g.gen+1
    from ecoli_data e
    join generation g on e.parent_id = g.id
),
child_count as (
    select a.id, count(b.parent_id) as child_count
    from ecoli_data a
    left join ecoli_data b
    on a.id = b.parent_id
    group by a.id
)

select 
    count(*) as COUNT,
    g.gen as GENERATION
from generation g
left join child_count c on g.id = c.id
where c.child_count = 0
group by GENERATION
