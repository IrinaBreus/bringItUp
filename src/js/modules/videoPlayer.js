const videoPlayer = (triggers, overlaySelector) => {
	const btns = document.querySelectorAll(triggers),
		  overlay = document.querySelector(overlaySelector),
		  close = overlay.querySelector('.close');
	let player, path, activeBtn;

	
	if (btns.length > 0) {
		const tag = document.createElement('script');
	
		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		openPlayer();
		closePlayer();
	}
	
	function createPlayer(url) {
		player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url,
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
		overlay.style.display = 'flex';
	}
	
	function onPlayerStateChange(state) {
		try {
			const blockedElem = activeBtn.closest('.module__video-item').nextElementSibling,
			playBtn = activeBtn.querySelector('svg').cloneNode(true),
			circle = blockedElem.querySelector('.play__circle'),
			text = blockedElem.querySelector('.play__text');
			
			if (state.data === 0) {
				if (circle.classList.contains('closed')) {
					circle.classList.remove('closed');
					circle.querySelector('svg').remove();
					circle.appendChild(playBtn);
					text.textContent = 'play video';
					text.classList.remove('attention');
					blockedElem.style.cssText = `
					opacity: 1;
					filter: none;
					`;
					blockedElem.setAttribute('data-disabled', 'false');
					}
				}
			} catch (e) {}
		};
		
		function openPlayer() {
			btns.forEach((btn, i) => {
				try {
					const blockedElem = btn.closest('.module__video-item').nextElementSibling;

					if (i % 2 == 0) {
						blockedElem.setAttribute('data-disabled', 'true');
					}
				} catch (e) {};

				btn.addEventListener('click', () => {
					if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
						
						activeBtn = btn;
						
						if (document.querySelector('iframe#frame')) {
							overlay.style.display = 'flex';
							if (path !== btn.dataset.url) {
								path = btn.dataset.url;
								player.loadVideoById({videoId: path});
							}
						} else {
							path = btn.dataset.url;
							createPlayer(path);
						}
					}
			});
		});
	}

	function closePlayer() {
		close.addEventListener('click', () => {
			overlay.style.display = 'none';
			player.stopVideo();
		});
	}
}

export default videoPlayer;