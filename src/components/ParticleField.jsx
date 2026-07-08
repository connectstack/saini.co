import { useEffect, useRef } from 'react'

// Animated "energy network" canvas: drifting nodes, proximity links, and
// bright pulses that travel along links like current. Sits behind hero copy.
export default function ParticleField({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const LINK_DIST = 130
    const COLORS = ['56, 232, 255', '185, 255, 46'] // electric cyan, volt lime
    let raf = 0
    let w = 0
    let h = 0
    let particles = []
    let pulses = []
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(110, Math.floor((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.6,
        c: COLORS[Math.random() < 0.65 ? 0 : 1],
      }))
      pulses = []
    }

    function drawFrame() {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Gentle repulsion around the cursor so the field feels alive.
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const md = Math.hypot(dx, dy)
        if (md < 140 && md > 0.01) {
          const force = (140 - md) / 140
          p.x += (dx / md) * force * 1.4
          p.y += (dy / md) * force * 1.4
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.16
            ctx.strokeStyle = `rgba(${a.c}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()

            if (pulses.length < 4 && Math.random() < 0.0006) {
              pulses.push({ a, b, t: 0, c: a.c })
            }
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${p.c}, 0.7)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      pulses = pulses.filter((pulse) => pulse.t < 1)
      for (const pulse of pulses) {
        pulse.t += 0.02
        const x = pulse.a.x + (pulse.b.x - pulse.a.x) * pulse.t
        const y = pulse.a.y + (pulse.b.y - pulse.a.y) * pulse.t
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8)
        glow.addColorStop(0, `rgba(${pulse.c}, 0.9)`)
        glow.addColorStop(1, `rgba(${pulse.c}, 0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function loop() {
      drawFrame()
      raf = requestAnimationFrame(loop)
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      drawFrame() // single static frame, no animation
    } else {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      document.addEventListener('mouseleave', onMouseLeave)
      loop()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
