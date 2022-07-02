export function alternateValue(value: any, placeholder: any = "Wczytywanie danych..."): any {
    return value ? value : placeholder;
}