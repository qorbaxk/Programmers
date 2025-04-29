-- 코드를 입력하세요
with discount_plan as(
    select 1 as min_days, 6 as max_days, 0 as rate
    union all
    select 7 as min_days, 29 as max_days, discount_rate / 100 as rate 
    from CAR_RENTAL_COMPANY_DISCOUNT_PLAN
    where car_type = '트럭' and duration_type = '7일 이상'
    union all
    select 30 as min_days, 89 as max_days, discount_rate / 100 as rate 
    from CAR_RENTAL_COMPANY_DISCOUNT_PLAN
    where car_type = '트럭' and duration_type = '30일 이상'
    union all
    select 90 as min_days, 10000 as max_days, discount_rate / 100 as rate 
    from CAR_RENTAL_COMPANY_DISCOUNT_PLAN
    where car_type = '트럭' and duration_type = '90일 이상'
)
SELECT 
history_id as HISTORY_ID,
round(c.daily_fee * (1 - d.rate) * (datediff(h.end_date,h.start_date)+1),0) as FEE
from CAR_RENTAL_COMPANY_RENTAL_HISTORY h
join CAR_RENTAL_COMPANY_CAR c on h.car_id = c.car_id
join discount_plan d on datediff(h.end_date,h.start_date)+1 between min_days and max_days
where c.car_type = '트럭'
order by FEE desc, history_id desc;