import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './useForm';

describe('useForm()', () => {
  describe('when content changes', () => {
    it('updates it values', () => {
      const initialValues = { name: '' };
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit: () => {},
      }));

      expect(result.current.formState).toEqual(initialValues);
      
      const event = {
        target: {
          value: 'Luke',
          name: 'name',
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      act(() => { 
        result.current.onChange(event);
      });

      expect(result.current.formState).toEqual({
        name: 'Luke',
      });
    });
  });
  
  describe('when content changes', () => {
    describe('and handleSubmit is called', () => {
      it('passes form values to onSubmit', () => {
        const initialValues = { name: '' };
        const onSubmitMock = jest.fn();
        const preventDefaultMock = jest.fn();
        const { result } = renderHook(() => useForm({
          initialValues,
          onSubmit: onSubmitMock,
        }));
        
        const event = {
          target: {
            value: 'Luke',
            name: 'name',
          },
          preventDefault: preventDefaultMock,
        } as unknown;
        
        act(() => { 
          result.current.onChange(event as React.ChangeEvent<HTMLInputElement>);
        });
        
        act(() => { 
          result.current.handleSubmit(event as React.FormEvent<HTMLFormElement>);
        });
        
        expect(onSubmitMock).toHaveBeenCalledWith({
          name: 'Luke',
        });
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});