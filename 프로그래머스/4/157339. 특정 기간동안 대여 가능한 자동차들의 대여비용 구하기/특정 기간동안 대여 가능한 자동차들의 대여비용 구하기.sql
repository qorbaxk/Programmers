-- 코드를 입력하세요
with discount_plan as (
    select car_type, discount_rate 
    from CAR_RENTAL_COMPANY_DISCOUNT_PLAN 
    where car_type in ('세단','SUV') and duration_type = '30일 이상'
)
select 
    r.car_id as CAR_ID, 
    r.car_type as CAR_TYPE,
    round(30 * r.daily_fee * (1 - d.discount_rate / 100),0) as FEE
from CAR_RENTAL_COMPANY_CAR r
join discount_plan d
        on r.car_type = d.car_type
where 
    round(30 * r.daily_fee * (1 - d.discount_rate / 100),0) >= 500000 and 
    round(30 * r.daily_fee * (1 - d.discount_rate / 100),0) < 2000000 and
    r.car_type in ('세단','SUV') and 
    r.car_id not in (
    SELECT h.car_id
    from CAR_RENTAL_COMPANY_CAR c
    join CAR_RENTAL_COMPANY_RENTAL_HISTORY h
        on c.car_id = h.car_id
    where 
        c.car_type in ('세단', 'SUV') and 
        not (h.end_date < '2022-11-01' or h.start_date > '2022-11-30')
)
order by fee desc, r.car_type asc, r.car_id desc