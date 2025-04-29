-- 코드를 입력하세요

# 2021년에 가입한 전체 회원 수
with allmember as (
    SELECT count(*) as all_member from user_info where year(joined) = 2021
)
select 
    year(o.sales_date) as YEAR,
    month(o.sales_date) as MONTH,
    count(distinct o.user_id) as PURCHASED_USERS,   
    round(count(distinct o.user_id) / a.all_member,1) as PUCHASED_RATIO
from online_sale o
cross join allmember a
where o.user_id in (select u.user_id from user_info u where year(joined) = 2021)
group by YEAR, MONTH
order by YEAR asc, MONTH asc;