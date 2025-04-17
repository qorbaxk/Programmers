-- 코드를 입력하세요
SELECT USER_ID, NICKNAME, sum(price) as TOTAL_SALES
from used_goods_user as u
inner join used_goods_board as b
on u.user_id = b.writer_id
where status = 'DONE'
group by user_id
having sum(price) >= 700000
order by total_sales asc;