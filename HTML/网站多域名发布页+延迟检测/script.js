document.addEventListener('contextmenu', event => event.preventDefault());
async function checkLatency(url, linkId) {
	const start = Date.now();
	try {
		await fetch(url, {
			mode: 'no-cors'
		});
		const latency = Date.now() - start;
		const latencySpan = document.querySelector(`#link${linkId} .latency`);
		const statusSpan = document.querySelector(`#link${linkId} .status`);
		latencySpan.textContent = `延迟：${latency}ms`;
		if (latency <= 2500) {
			statusSpan.textContent = '状态：良好';
			statusSpan.className = 'status good';
		} else if (latency <= 4000) {
			statusSpan.textContent = '状态：一般';
			statusSpan.className = 'status average';
		} else {
			statusSpan.textContent = '状态：较差';
			statusSpan.className = 'status poor';
		}
	} catch (error) {
		const latencySpan = document.querySelector(`#link${linkId} .latency`);
		const statusSpan = document.querySelector(`#link${linkId} .status`);
		latencySpan.textContent = '延迟：无法测量';
		statusSpan.textContent = '状态：无法访问';
		statusSpan.className = 'status unable';
	}
}
window.onload = async () => {
	await Promise.all([checkLatency('https://fgr1787071.github.io/', '1'),checkLatency('https://www.fgr178707.fun/', '2')]);
};