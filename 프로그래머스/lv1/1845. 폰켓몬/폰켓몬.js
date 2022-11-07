const solution = (nums) => {
    let half = nums.length/2;
    let arr = new Set(nums);
    return [...arr].length >= half? half : [...arr].length;
}