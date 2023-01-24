const videoPlayer = (triggers, overlaySelector) => {
	const btns = document.querySelectorAll(triggers),
		  overlay = document.querySelector(overlaySelector),
		  close = overlay.querySelector('.close');
	let player;

	const tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	function onYouTubeIframeAPIReady(url) {
		player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url
		});
		overlay.style.display = 'flex';
	}

	btns.forEach(btn => {
		btn.addEventListener('click', () => {

			if (document.querySelector('iframe#frame')) {
				overlay.style.display = 'flex';
			} else {
				const path = btn.dataset.url;
				onYouTubeIframeAPIReady(path);
			}
		});
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		player.stopVideo();
	})
}

export default videoPlayer;