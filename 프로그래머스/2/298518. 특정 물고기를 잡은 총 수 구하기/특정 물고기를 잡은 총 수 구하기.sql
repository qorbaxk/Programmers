-- 코드를 작성해주세요
select count(*) as FISH_COUNT
from fish_info as f
inner join fish_name_info as i
on f.fish_type = i.fish_type
where i.fish_name in ('BASS', 'SNAPPER')