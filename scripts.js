const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
	sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
	sidebar.classList.remove('show');
});

const btnCA = document.getElementById('btnCA');

const copyCA = () => {
	window.navigator.clipboard.writeText("BzPcC3X5fDNiCAisNHau54DZJheYbv5QgEmqXYcEpump")
}

btnCA.addEventListener('click', () => {
	copyCA();
	btnCA.innerHTML = "Copied!";
	setTimeout(() => {
		btnCA.innerHTML = "Copy";
	}, 1000);
});