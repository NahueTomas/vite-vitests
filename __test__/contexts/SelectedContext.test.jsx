import { useContext } from 'react'

import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { SelectedContext, SelectedContextProvider } from '../../src/contexts'

describe('SelectedContext tests', () => {
  const accountExample = {
    e: '1',
    n: '872378326701',
    t: '02',
    saldo: '1500',
    moneda: 'u$s',
    tipo_letras: 'CC',
  }

  const TestComponent = () => {
    const { selected, setSelected } = useContext(SelectedContext)
    return (
      <div onClick={() => setSelected(accountExample)}>
        {JSON.stringify(selected)}
      </div>
    )
  }

  it('Should show the default value', () => {
    render(
      <SelectedContextProvider>
        <TestComponent />
      </SelectedContextProvider>
    )

    const defaultValue = 'null'
    expect(screen.getByText(defaultValue)).toBeDefined()
  })

  it('Should show a selected item', () => {
    render(
      <SelectedContextProvider>
        <TestComponent />
      </SelectedContextProvider>
    )

    // Default test component
    const defaultValue = 'null'
    const testComponent = screen.getByText(defaultValue)

    // On click on test component
    fireEvent.click(testComponent)
    expect(screen.getByText(JSON.stringify(accountExample))).toBeDefined()
  })
})
