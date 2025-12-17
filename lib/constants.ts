export const ERA_LIST = [
  { id: 'dos', name: 'MS-DOS', year: 1985, color: '#0a0a0a' },
  { id: '95', name: 'Windows 95', year: 1995, color: '#008080' },
  { id: '98', name: 'Windows 98', year: 1998, color: '#4682b4' },
  { id: 'me', name: 'Windows ME', year: 2000, color: '#4169e1' },
  { id: 'xp', name: 'Windows XP', year: 2001, color: '#228b22' },
  { id: 'vista', name: 'Windows Vista', year: 2007, color: '#1ba1e2' },
  { id: '7', name: 'Windows 7', year: 2009, color: '#436eee' },
  { id: '8', name: 'Windows 8', year: 2012, color: '#00bcf2' },
  { id: '10', name: 'Windows 10', year: 2015, color: '#0078d4' },
  { id: '11', name: 'Windows 11', year: 2021, color: '#0067c0' }
] as const;

export const BORDER_RADIUS_MAP: Record<string, string> = {
  dos: '0px',
  '95': '2px',
  '98': '2px',
  me: '4px',
  xp: '8px',
  vista: '12px',
  '7': '8px',
  '8': '0px',
  '10': '8px',
  '11': '12px'
};

export const SOUND_URLS: Record<string, string> = {
  '95': '/sounds/95.ogg',
  '98': '/sounds/98.ogg',
  me: '/sounds/me.ogg',
  xp: '/sounds/xp.ogg',
  vista: '/sounds/vista.ogg',
  '7': '/sounds/7.ogg',
  '8': '/sounds/8.ogg',
  '10': '/sounds/10.ogg',
  '11': '/sounds/11.ogg'
};

export const WALLPAPER_URLS: Record<string, string> = {
  dos: '/wallpapers/dos-black.webp',
  '95': '/wallpapers/95-clouds.webp',
  '98': '/wallpapers/98-clouds.webp',
  me: '/wallpapers/me-clouds.webp',
  xp: '/wallpapers/xp-bliss.webp',
  vista: '/wallpapers/vista-aurora.webp',
  '7': '/wallpapers/7-hero.webp',
  '8': '/wallpapers/8-default.webp',
  '10': '/wallpapers/10-hero.webp',
  '11': '/wallpapers/11-bloom.webp'
};

export const HOTKEY_TIMEOUT = 500;
export const PARTICLE_COUNT_DESKTOP = 2048;
export const PARTICLE_COUNT_MOBILE = 640;
export const PARTICLE_COUNT_LOW = 256;

export const STARTUP_SOUND_VOLUME = 0.3;
export const PARTICLE_EXPLOSION_DURATION = 1200;
export const SCROLL_DURATION = 800;

export const METRO_TILES = [
  { id: 1, title: 'Desktop', color: '#0078d4' },
  { id: 2, title: 'Mail', color: '#107c10' },
  { id: 3, title: 'Calendar', color: '#ff8c00' },
  { id: 4, title: 'Photos', color: '#e74856' },
  { id: 5, title: 'Store', color: '#5c2d91' },
  { id: 6, title: 'Weather', color: '#1ba1e2' },
  { id: 7, title: 'News', color: '#ff4500' },
  { id: 8, title: 'Maps', color: '#00bcf2' },
  { id: 9, title: 'Music', color: '#d83b01' },
  { id: 10, title: 'Videos', color: '#881798' },
  { id: 11, title: 'Games', color: '#00cc6a' },
  { id: 12, title: 'Settings', color: '#737373' }
];

export const EASTER_EGG_COMMANDS = ['winver', 'cmd', 'regedit', 'taskmgr'] as const;