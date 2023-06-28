export const useLogout = () => {
    const currentUser = useState('currentUser');
    currentUser.value = null;
    useLocalStorage('currentUser', null);
}