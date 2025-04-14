-- 코드를 입력하세요
SELECT b.TITLE, b.BOARD_ID, r.REPLY_ID, r.WRITER_ID, r.CONTENTS, 
date_format(r.CREATED_DATE, '%Y-%m-%d') as CREATED_DATE
from used_goods_board as b
inner join used_goods_reply as r
on b.board_id = r.board_id
where year(b.created_date) = 2022 and month(b.created_date) = 10
order by r.created_date asc, b.title asc;
