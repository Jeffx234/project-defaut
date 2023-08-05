import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CountService {
  // Simulação de um contador em um backend
  private counter = 0;

  incrementCounter(): Observable<number> {
    // Simulação de uma chamada ao backend
    // Neste exemplo, usamos o operador of() do rxjs para retornar um valor simulado.
    // Você deve substituir essa lógica com uma chamada real ao backend usando HttpClient.
    this.counter += 1;
    return of(this.counter);
  }

  decrementCounter(): Observable<number> {
    // Simulação de uma chamada ao backend
    // Neste exemplo, usamos o operador of() do rxjs para retornar um valor simulado.
    // Você deve substituir essa lógica com uma chamada real ao backend usando HttpClient.
    this.counter -= 1;
    return of(this.counter);
  }

  resetCounter(): Observable<number> {
    // Simulação de uma chamada ao backend
    // Neste exemplo, usamos o operador of() do rxjs para retornar um valor simulado.
    // Você deve substituir essa lógica com uma chamada real ao backend usando HttpClient.
    this.counter = 0;
    return of(this.counter);
  }
}
