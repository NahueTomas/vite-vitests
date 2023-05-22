import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { pages } from './testPages'
import { GridCard } from '../../../src/components/GridCard'
import { AccountsContextProvider, SelectedContext } from '../../../src/contexts'

describe('GridCard Tests', () => {
  it('Should show the first page with 4 accounts & the next page button', async () => {
    render(
      <SelectedContext.Provider value={{}}>
        <AccountsContextProvider>
          <GridCard />
        </AccountsContextProvider>
      </SelectedContext.Provider>
    )

    // Checking items
    const cards = await screen.findAllByText(/Nro:/i)
    expect(cards.length).toBe(5)

    // Checking next button
    const nextButton = screen.queryAllByText(/Más opciones >>/i)
    expect(nextButton.length).toBe(1)
  })

  it('Should set the selected clicking the first card', async () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContextProvider>
          <GridCard />
        </AccountsContextProvider>
      </SelectedContext.Provider>
    )

    const card = await screen.findByText(/Nro: 872378326701/i)
    fireEvent.click(card)
    expect(handleClick).toBeCalledWith(pages[0][0])
  })

  it('Should render second page with 3 & back button', async () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContextProvider>
          <GridCard />
        </AccountsContextProvider>
      </SelectedContext.Provider>
    )

    // Changing page
    const nextButton = await screen.findByText(/Más opciones >>/i)
    fireEvent.click(nextButton)

    // Checking page
    const cards = screen.queryAllByText(/Nro:/i)
    expect(cards.length).toBe(3)

    // Checking back button
    const backButton = screen.queryAllByText(/<< Opciones anteriores/i)
    expect(backButton.length).toBe(1)
  })

  it('Should go to the last page and back to the first one', async () => {
    const handleClick = vi.fn()

    render(
      <SelectedContext.Provider value={{ setSelected: handleClick }}>
        <AccountsContextProvider>
          <GridCard />
        </AccountsContextProvider>
      </SelectedContext.Provider>
    )

    // Going to the last page
    const nextButton = await screen.findByText(/Más opciones >>/i)
    fireEvent.click(nextButton)

    // Going to the first page
    fireEvent.click(screen.getByText(/<< Opciones anteriores/i))

    // Checking that is the fist page
    // Checking the items
    const cards = screen.queryAllByText(/Nro:/i)
    expect(cards.length).toBe(5)

    // Checking next button
    const nextButton2 = screen.getAllByText(/Más opciones >>/i)
    expect(nextButton2.length).toBe(1)

    // Checking the back button
    const backButton = screen.queryAllByText(/<< Opciones anteriores/i)
    expect(backButton.length).toBe(0)
  })
})
