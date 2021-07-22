// 初期化（OSの設定によってモードとsessionStorageを設定）
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
  sessionStorage.theme = 'dark';
} else {
  document.documentElement.classList.remove('dark')
  sessionStorage.theme = 'light';
}

// ボタン要素
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener("click", () => {
  toggleDarkMode();
})

// モードとsessionStorageの切り替え
const toggleDarkMode = () => {
  if (sessionStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    sessionStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark')
    sessionStorage.theme = 'dark';
  }
}
