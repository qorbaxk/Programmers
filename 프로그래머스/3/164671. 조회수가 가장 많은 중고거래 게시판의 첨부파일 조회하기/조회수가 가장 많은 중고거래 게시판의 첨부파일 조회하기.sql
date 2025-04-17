-- 코드를 입력하세요
select 
concat('/home/grep/src/',board_id,'/',file_id,file_name,file_ext) as file_path
from used_goods_file
where board_id in (select board_id from used_goods_board where views in (SELECT max(views) from used_goods_board))
order by file_id desc;


