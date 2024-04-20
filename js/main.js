const initApp = () => {
    // 取得漢堡圖標DOM節點(下簡稱節點)
    const hamburgerBtn = document.getElementById('hamburger-button')
    // 取得選單DOM節點(下簡稱節點)
    const mobileMenu = document.getElementById('mobile-menu')
    const toggleMenu = () => {
        // classList屬性 對一節點的class屬性做多值操作
        // toggle方法 
        // 節點mobileMenu的hidden類值如果已存在，則移除它，否則新增它
        mobileMenu.classList.toggle('hidden')
        // 節點mobileMenu的flex類值如果已存在，則移除它，否則新增它
        mobileMenu.classList.toggle('flex')
        // 漢堡圖標節點的動畫類名
        hamburgerBtn.classList.toggle('toggle-btn')
    } 
    // 點擊漢堡圖標DOM，執行toggleMenu函數
    hamburgerBtn.addEventListener('click', toggleMenu)
    // 點擊選單節點(該節點寬高內任何位置都有效)，執行toggleMenu函數
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)