export default interface Card{
    id: string,
    firstname: string,
    lastname: string,
    text: string,
    picture: string,
    metadata: {
        createdAt: number,
        updatedAt: number
    }
}