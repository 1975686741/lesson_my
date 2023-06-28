export const useLocalStorage = <T>(
    key: string,
    value?: any,
  ): T | null | void => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else if (value === null) {
      localStorage.removeItem(key);
    } else {
      const data = localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : null;
    }
  };
   