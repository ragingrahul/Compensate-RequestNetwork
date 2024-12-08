export function formatAddress(address: string, prefixLength = 4, suffixLength = 3): string {
    if (address.length <= prefixLength + suffixLength) {
        return address;
    }
    return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}

export const getColorClass = (type: string) => {
    switch (type) {
        case 'order1':
            return 'text-green-500';
        case 'order2':
            return 'text-yellow-500';
        case 'order3':
            return 'text-blue-500';
        case 'order4':
            return 'text-red-500';
        default:
            return 'text-purple';
    }
};
