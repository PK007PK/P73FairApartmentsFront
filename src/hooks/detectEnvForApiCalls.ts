export function detectEnvForApiCalls(): string | null{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return '';
    } else {
        return "https://pk007pk.smallhost.pl"
    }
}
