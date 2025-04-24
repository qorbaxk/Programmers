-- 코드를 입력하세요
select 
month(start_date) as MONTH,
car_id as CAR_ID,
count(*) as RECORDS
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where car_id in (
    SELECT car_id
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where year(start_date) = 2022 and month(start_date) between 8 and 10
    group by car_id
    having count(*) >= 5
) and year(start_date) = 2022 and month(start_date) between 8 and 10
group by car_id, month(start_date)
order by month(start_date) asc, car_id desc;