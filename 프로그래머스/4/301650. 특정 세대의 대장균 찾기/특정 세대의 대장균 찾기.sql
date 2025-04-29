-- 코드를 작성해주세요
with recursive generation as(
    select id, parent_id, 1 as gen
    from ecoli_data
    where parent_id is null
    
    union all
    
    select e.id, e.parent_id, g.gen+1
    from ecoli_data e
    join generation g on e.parent_id = g.id
)
select id from generation where gen=3 order by id asc;