import React, { Component, MouseEvent, Props, ChangeEvent} from 'react';

interface IProps {
}
interface IState {
  thePieces?: string;
}

export class ChessBoardLandingPage extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        console.log("wasm test");
    }

    async componentDidMount() {
        console.log("Loading stuff");
        loadWasm();

    }

    render(){
        return (
            <p>Testing!</p>
        )
    }


}


export async function loadWasm() {
    try {
      const wasm = await import('stockfish.wasm');
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
};