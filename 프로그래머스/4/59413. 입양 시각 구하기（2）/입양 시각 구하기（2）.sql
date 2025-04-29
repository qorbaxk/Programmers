-- 코드를 입력하세요
with recursive hours as(
    select 0 as HOUR
    union all
    select hour + 1 from hours where hour < 23
)
SELECT 
    h.HOUR,
    count(a.datetime) as COUNT
from hours h
left join animal_outs a
    on hour(a.datetime) = h.HOUR
group by h.HOUR
order by h.HOUR asc