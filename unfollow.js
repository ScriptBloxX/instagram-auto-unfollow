// configs
const ignore = ['cosplay_saku'];
const unfollow_btn = 'เลิกติดตาม';

// get follow button elements
document.querySelectorAll('button').forEach(e => {
    const following = e.children[0]
    if (following.textContent === 'กำลังติดตาม') {
        // get unfollow confirm button elements
        following.addEventListener('click', e => {
            // wait popup
            setTimeout(() => {
                document.querySelectorAll('button').forEach(button => {
                    if (button.textContent === unfollow_btn) {
                        button.click();
                        console.log('unfollow success!');
                    }
                })
            }, 1200)
        })
        const parentElement = following.parentElement.parentElement.parentElement;
        parentElement.querySelectorAll('span').forEach(spanTag=>{
            if(!ignore.includes(spanTag.textContent)){
                setTimeout(() => {
                    following.click()
                    console.log(following.textContent + ' has been clicked!');
                }, 1000);
            }
        })
    }
})
