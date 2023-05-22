import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { pages } from './testPages'
import { GridCard } from '../../../src/components/GridCard'
import { AccountsContext, SelectedContext } from '../../../src/contexts'

describe('GridCard Tests', () => {
  it('Should show the first page with 4 accounts & the next page button', () => {
    render(
      <SelectedContext.Provider value={{}}>
        <AccountsContext.Provider value={{ pages }}>
          <GridCard />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Checking items
    const cards = screen.queryAllByText(/Nro:/i)
    expect(cards.length).toBe(5)

    // Checking next button
    const nextButton = screen.queryAllByText(/Más opciones >>/i)
    expect(nextButton.length).toBe(1)
  })

  it('Should set the selected clicking the first card', () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContext.Provider value={{ pages }}>
          <GridCard />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    fireEvent.click(screen.getByText(/Nro: 872378326701/i))
    expect(handleClick).toBeCalledWith(pages[0][0])
  })

  it('Should render second page with 4 accounts & 2 buttons (next and back)', () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContext.Provider value={{ pages }}>
          <GridCard />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Changing page
    fireEvent.click(screen.getByText(/Más opciones >>/i))

    // Checking page
    const cards = screen.queryAllByText(/Nro:/i)
    expect(cards.length).toBe(4)

    // Checking back button
    const backButton = screen.queryAllByText(/<< Opciones anteriores/i)
    expect(backButton.length).toBe(1)

    // Checking next button
    const nextButton = screen.queryAllByText(/Más opciones >>/i)
    expect(nextButton.length).toBe(1)
  })

  it('Should show the last page with 4 items and the back button', () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContext.Provider value={{ pages }}>
          <GridCard />
        </AccountsContext.Provider>
      </SelectedContext.Provider>
    )

    // Changing page
    fireEvent.click(screen.getByText(/Más opciones >>/i))
    fireEvent.click(screen.getByText(/Más opciones >>/i))

    // Checking page
    const cards = screen.queryAllByText(/Nro:/i)
    expect(cards.length).toBe(4)

    // Checking back button
    const backButton = screen.queryAllByText(/<< Opciones anteriores/i)
    expect(backButton.length).toBe(1)

    // Checking next button
    const nextButton = screen.queryAllByText(/Más opciones >>/i)
    expect(nextButton.length).toBe(0)
  })
})
