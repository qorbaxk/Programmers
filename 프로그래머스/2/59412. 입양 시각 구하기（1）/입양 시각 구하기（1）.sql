-- 코드를 입력하세요
SELECT date_format(datetime, '%H') as HOUR, count(*) as COUNT
from animal_outs
group by HOUR
having HOUR between 9 and 19
order by HOUR asc;