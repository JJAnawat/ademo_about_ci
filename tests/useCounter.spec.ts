import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCounter());
    
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val when increment is called', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(5);
      // result.current.increment();
    });

    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(5);
  });

  it('should increment count multiple times correctly', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(3);
    });
    
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    
    expect(result.current.count).toBe(6);
  });

  it('should allow setting val to different values', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(10);
    });
    
    expect(result.current.val).toBe(10);
    
    act(() => {
      result.current.setVal(2);
    });
    
    expect(result.current.val).toBe(2);
  });

  it('should handle negative val values', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(-1);
    });
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(-1);
  });

  it('should handle zero val', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setVal(0);
    });
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(0);
  });
});
