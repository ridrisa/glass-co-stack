'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface PremiumButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export default function PremiumButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  disabled = false,
  ariaLabel,
}: PremiumButtonProps) {
  const baseClasses = 'relative overflow-hidden rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink'

  const variantClasses = {
    primary: 'bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'glass-3 text-white border border-white/20 hover:border-accent/50 hover:shadow-glass-md',
    ghost: 'text-accent hover:bg-accent/10',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body',
    lg: 'px-10 py-4 text-body-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`

  const buttonContent = (
    <>
      {/* Shimmer effect */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 -translate-x-full"
          animate={{
            translateX: ['100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'linear',
          }}
        >
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </motion.div>
      )}

      {/* Gradient overlay on hover for secondary */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={`${combinedClasses} inline-block text-center group`}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`${combinedClasses} group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </motion.button>
  )
}
