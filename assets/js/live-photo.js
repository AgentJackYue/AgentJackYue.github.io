
document.querySelectorAll('.live-photo__player').forEach((player) => {
  const video = player.querySelector('.live-photo__video');

  if (!video) return;

  const hoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)');
  let playing = false;

  async function startPlayback() {
    try {
      video.muted = true;
      await video.play();

      playing = true;
      player.classList.add('is-playing');
      player.setAttribute('aria-pressed', 'true');
    } catch (error) {
      // 浏览器拒绝播放时，保留静态封面。
      console.warn('Live Photo playback failed:', error);
    }
  }

  function stopPlayback() {
    video.pause();

    // 回到开头，让下一次播放从头开始。
    video.currentTime = 0;

    playing = false;
    player.classList.remove('is-playing');
    player.setAttribute('aria-pressed', 'false');
  }

  // 桌面端：悬停播放，移出恢复照片。
  player.addEventListener('pointerenter', (event) => {
    if (hoverSupported.matches && event.pointerType === 'mouse') {
      startPlayback();
    }
  });

  player.addEventListener('pointerleave', (event) => {
    if (hoverSupported.matches && event.pointerType === 'mouse') {
      stopPlayback();
    }
  });

  // 点击：主要用于触屏设备，也兼容桌面端点击。
  player.addEventListener('click', () => {
    if (playing) {
      stopPlayback();
    } else {
      startPlayback();
    }
  });

  // 支持键盘操作。
  player.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (playing) {
        stopPlayback();
      } else {
        startPlayback();
      }
    }
  });
});
