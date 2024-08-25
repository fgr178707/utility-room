// scripts.js
function acceptDisclaimer() {
    document.getElementById('disclaimer').style.display = 'none';
}

function openDisclaimer() {
    const disclaimerText = `
    <h1>免责声明</h1>
    <h2>1、本站资源均来自互联网与其他用户上传。资源版权归原作者或权利人所有。本站只提供存储服务。
    <h2>2、用户下载和使用本站提供的资源应遵循相关法律法规，仅限个人学习和研究之用，严禁用于商业及非法用途。
    <h2>3、本站对用户在下载和使用本站资源中可能引发的任何法律责任不承担任何责任。用户应自行承担使用本站资源的风险。
    <h2>4、本站不保证所提供的资源的准确性、安全性、完整性和合法性，不对用户因使用本站资源而可能遭致的损失或损害负责。
    <h2>5、如果本站的资源侵犯了您的版权或其他合法权益请您联系我们，我们将在合理时间内删除相关内容。
    <h2>6、用户在下载和使用本站资源时需自行判断其适用性，并承担一切风险和责任。
    <h2>7、本站有权根据需要随时修改和更新免责声明，恕不另行通知。
    <h2>8、本站不会采取任何方式存储任何用户的信息。也不会存在第三方ah2i读取用户信息。
    <h2>9、本站可能会提供第三方服务或链接至第三方网站。这些服务和链接仅为方便用户，本站对这些服务和链接的内容或可用性不承担任何责任。
    <h1>下载本站文件将默认同意以上免责声明*</h1>`;

    const newWindow = window.open("", "_blank", "width=1300,height=800");
    newWindow.document.write(`<pre>${disclaimerText}</pre>`);
}

// 检测是否启用暗模式
function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelectorAll('.download-item').forEach(function(item) {
            item.classList.add('dark-mode');
        });
        document.querySelector('.disclaimer-content').classList.add('dark-mode');
    }
}

// 监听暗模式切换
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelectorAll('.download-item').forEach(function(item) {
            item.classList.add('dark-mode');
        });
        document.querySelector('.disclaimer-content').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelectorAll('.download-item').forEach(function(item) {
            item.classList.remove('dark-mode');
        });
        document.querySelector('.disclaimer-content').classList.remove('dark-mode');
    }
});

// 页面加载时检测暗模式
window.onload = detectDarkMode;
