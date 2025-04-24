-- 코드를 작성해주세요
select item_id, item_name, rarity
from item_info
where item_id in (
    select a.item_id 
    from item_tree as a
    where not exists (select b.item_id from item_tree as b where b.parent_item_id = a.item_id)
)
order by item_id desc;
