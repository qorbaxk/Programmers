-- 코드를 작성해주세요
select id, 
case 
    when SIZE_OF_COLONY > 1000 then 'HIGH'
    when SIZE_OF_COLONY > 100 then 'MEDIUM'
    when SIZE_OF_COLONY <= 100 then 'LOW'
end as SIZE
from ecoli_data
