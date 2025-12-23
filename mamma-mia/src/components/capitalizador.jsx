const CapitalizedText = ({ text, capitalizeAll = false, children }) => {
    const formatText = (str) => {
        if (!str) return '';
        
        if (capitalizeAll) {
            return str
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const content = text || children;
    
    return formatText(content);
};

export default CapitalizedText;