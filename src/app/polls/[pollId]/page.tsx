
export default function Poll({params}: {params: {pollId: string}}) {

    const userId = params.pollId;

    {
        votes:{
            playerId:[],
            playerId2:[]

        },
        meta:{
            title: "Poll",
            createdAt: "2021-10-01T00:00:00Z",
            status: "open",
        }
    }

    return <>
    </>
}