-- 코드를 작성해주세요
select 
    year(DIFFERENTIATION_DATE) as YEAR,
    (select max(size_of_colony) from ecoli_data where year(DIFFERENTIATION_DATE) = YEAR) - SIZE_OF_COLONY as YEAR_DEV,
    id
from ecoli_data
order by YEAR asc, YEAR_DEV asc;