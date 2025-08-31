/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Primary Palette - Enhanced contrast
        primary: {
          DEFAULT: '#8B5DFF', // More vibrant main purple
          light: '#A78BFF',   // Softer light variation
          dark: '#6366F1',    // Deeper contrast
          50: '#F8FAFF',      // Ultra light
          100: '#EEEDFF',
          200: '#DDD9FF',
          300: '#C7C0FF',
          400: '#AFA3FF',
          500: '#8B5DFF',     // Main brand color
          600: '#6366F1',
          700: '#4F46E5',
          800: '#3730A3',
          900: '#1E1B4B',     // Deep contrast
        },
        
        // Enhanced Accent colors
        accent: {
          purple: '#A855F7',  // Electric purple
          pink: '#F472B6',    // Modern pink
          blue: '#3B82F6',    // Bright blue
          cyan: '#22D3EE',    // Vivid cyan
          emerald: '#10B981', // Success green
          amber: '#F59E0B',   // Warning yellow
          white: '#FFFFFF',   // Pure white
        },
        
        // Modern Background system
        dark: {
          bg: '#030712',      // True dark background
          surface: '#111827', // Elevated surface
          card: '#1F2937',    // Card background with better contrast
          elevated: '#374151', // Higher elevation
          border: '#4B5563',  // Visible borders
          subtle: '#6B7280',  // Subtle elements
        },
        
        // Accessible Text colors
        text: {
          primary: '#F9FAFB',   // High contrast white
          secondary: '#D1D5DB', // Clear secondary text
          tertiary: '#9CA3AF',  // Tertiary text
          muted: '#6B7280',     // Muted but readable
          accent: '#8B5DFF',    // Brand accent text
          inverse: '#111827',   // Dark text for light backgrounds
        },
        
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        
        // Legacy mappings for backward compatibility
        secondary: '#7B3DB0',
        nova: {
          purple: '#9B4DE0',
          deepPurple: '#7B3DB0',
          darkPurple: '#5D2E85',
          glowPurple: '#B66FEA',
          neon: '#A855F7',
          cosmic: '#6366F1',
        },
        gray: {
          text: '#B8BCC8',
          light: '#E5E7EB',
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        // Modern shadow system with better contrast
        'glow': '0 0 20px rgba(139, 93, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(139, 93, 255, 0.6)',
        'glow-xl': '0 0 60px rgba(139, 93, 255, 0.8)',
        'neon': '0 0 30px rgba(167, 139, 255, 0.7)',
        'neon-lg': '0 0 50px rgba(167, 139, 255, 0.8)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'modern': '0 8px 32px rgba(139, 93, 255, 0.15)',
        'modern-lg': '0 16px 48px rgba(139, 93, 255, 0.25)',
        'cosmic': '0 0 80px rgba(99, 102, 241, 0.5)',
        // Additional modern shadows
        'soft': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.16)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.20)',
        'xl': '0 16px 64px rgba(0, 0, 0, 0.24)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Modern gradient system
        'brand-gradient': 'linear-gradient(135deg, #8B5DFF 0%, #6366F1 100%)',
        'hero-gradient': 'linear-gradient(135deg, #030712 0%, #1F2937 50%, #374151 100%)',
        'card-gradient': 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        'accent-gradient': 'linear-gradient(90deg, #8B5DFF 0%, #A855F7 50%, #3B82F6 100%)',
        'cosmic-gradient': 'linear-gradient(45deg, #030712 0%, #1F2937 35%, #374151 70%, #4B5563 100%)',
        'aurora': 'linear-gradient(120deg, #8B5DFF 0%, #A855F7 25%, #6366F1 50%, #3B82F6 75%, #22D3EE 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'gradient': 'gradient 20s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse': 'neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora': 'aurora 25s ease infinite',
        'cosmic-drift': 'cosmicDrift 30s linear infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'smooth-bounce': 'smoothBounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
        'musical-float': 'musicalFloat 8s ease-in-out infinite',
        'sound-pulse': 'soundPulse 2s ease-in-out infinite',
        'rhythm-beat': 'rhythmBeat 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'ethereal-drift': 'etherealDrift 15s ease-in-out infinite',
        'dreamy-hover': 'dreamyHover 6s ease-in-out infinite',
        'visualizer-bounce': 'visualizerBounce 0.8s ease-in-out infinite',
        'sparkle-twinkle': 'sparkleTwinkle 3s ease-in-out infinite',
        'ripple-expand': 'rippleExpand 4s ease-out infinite',
        'frequency-flow': 'frequencyFlow 3s linear infinite',
        'melodic-sweep': 'melodicSweep 5s ease-in-out infinite',
        'header-pulse': 'headerPulse 2s ease-in-out infinite',
        'musical-entrance': 'musicalEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'stagger-entrance': 'staggerEntrance 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'text-reveal': 'textReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'particle-drift': 'particleDrift 20s ease-in-out infinite',
        'smooth-glow': 'smoothGlow 3s ease-in-out infinite alternate',
        'advanced-float': 'advancedFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(180, 92, 240, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(180, 92, 240, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(180, 92, 240, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(180, 92, 240, 0.9)' },
        },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(232, 145, 255, 0.7)', textShadow: '0 0 10px rgba(232, 145, 255, 0.8)' },
          '50%': { boxShadow: '0 0 50px rgba(232, 145, 255, 1)', textShadow: '0 0 20px rgba(232, 145, 255, 1)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%', transform: 'rotate(0deg)' },
          '25%': { backgroundPosition: '100% 25%', transform: 'rotate(1deg)' },
          '50%': { backgroundPosition: '100% 75%', transform: 'rotate(0deg)' },
          '75%': { backgroundPosition: '0% 100%', transform: 'rotate(-1deg)' },
        },
        cosmicDrift: {
          '0%': { transform: 'translateX(-100%) translateY(0%) rotate(0deg)' },
          '25%': { transform: 'translateX(-50%) translateY(-25%) rotate(90deg)' },
          '50%': { transform: 'translateX(0%) translateY(0%) rotate(180deg)' },
          '75%': { transform: 'translateX(50%) translateY(25%) rotate(270deg)' },
          '100%': { transform: 'translateX(100%) translateY(0%) rotate(360deg)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '33%': { transform: 'translateY(-20px) translateX(10px) scale(1.1)' },
          '66%': { transform: 'translateY(-10px) translateX(-15px) scale(0.9)' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(180, 92, 240, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(232, 145, 255, 0.8), 0 0 30px rgba(180, 92, 240, 0.6)' },
        },
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        musicalFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.6' },
          '25%': { transform: 'translateY(-40px) translateX(20px) rotate(10deg)', opacity: '0.8' },
          '50%': { transform: 'translateY(-60px) translateX(-10px) rotate(-5deg)', opacity: '1' },
          '75%': { transform: 'translateY(-30px) translateX(30px) rotate(15deg)', opacity: '0.7' },
        },
        soundPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(2.5)', opacity: '0.1' },
        },
        rhythmBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.1)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.05)' },
          '60%': { transform: 'scale(1)' },
        },
        etherealDrift: {
          '0%, 100%': { transform: 'translateX(-20px) translateY(0px) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translateX(30px) translateY(-15px) scale(1.2)', opacity: '0.6' },
          '66%': { transform: 'translateX(-10px) translateY(25px) scale(0.8)', opacity: '0.3' },
        },
        dreamyHover: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(2deg)' },
          '66%': { transform: 'translateY(-12px) rotate(-1deg)' },
        },
        visualizerBounce: {
          '0%, 100%': { height: '8px' },
          '25%': { height: '24px' },
          '50%': { height: '40px' },
          '75%': { height: '16px' },
        },
        sparkleTwinkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        rippleExpand: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        frequencyFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        melodicSweep: {
          '0%, 100%': { transform: 'translateX(-200%) skewX(-20deg)', opacity: '0' },
          '50%': { transform: 'translateX(200%) skewX(20deg)', opacity: '0.8' },
        },
        headerPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 8px 32px rgba(180, 92, 240, 0.1)' },
          '50%': { transform: 'scale(1.01)', boxShadow: '0 12px 48px rgba(180, 92, 240, 0.2)' },
        },
        musicalEntrance: {
          '0%': { opacity: '0', transform: 'translateY(80px) scale(0.8) rotateX(20deg)' },
          '50%': { opacity: '0.8', transform: 'translateY(-10px) scale(1.05) rotateX(-5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotateX(0deg)' },
        },
        staggerEntrance: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.8) rotateY(-10deg)' },
          '60%': { opacity: '0.8', transform: 'translateY(-5px) scale(1.02) rotateY(2deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotateY(0deg)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(10px)' },
          '50%': { opacity: '0.7', transform: 'translateY(-5px)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        particleDrift: {
          '0%, 100%': { transform: 'translateX(-10px) translateY(0px) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateX(15px) translateY(-20px) rotate(90deg)', opacity: '0.6' },
          '50%': { transform: 'translateX(-5px) translateY(-30px) rotate(180deg)', opacity: '0.8' },
          '75%': { transform: 'translateX(10px) translateY(-10px) rotate(270deg)', opacity: '0.4' },
        },
        smoothGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(180, 92, 240, 0.3)', 
            filter: 'brightness(1) saturate(1)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(232, 145, 255, 0.6)', 
            filter: 'brightness(1.1) saturate(1.2)' 
          },
        },
        advancedFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotateZ(0deg)', 
            filter: 'hue-rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-15px) translateX(8px) rotateZ(2deg)', 
            filter: 'hue-rotate(5deg)' 
          },
          '50%': { 
            transform: 'translateY(-25px) translateX(-5px) rotateZ(-1deg)', 
            filter: 'hue-rotate(10deg)' 
          },
          '75%': { 
            transform: 'translateY(-10px) translateX(12px) rotateZ(3deg)', 
            filter: 'hue-rotate(5deg)' 
          },
        },
      },
    },
  },
  plugins: [],
}