import { Component } from '@angular/core';
import { Equipe } from '../../add-equipe/equipe/equipe.module';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-voir-equipe',
  templateUrl: './voir-equipe.component.html',
  styleUrls: ['./voir-equipe.component.css']
})
export class VoirEquipeComponent {
equipes: Equipe[] = [];

  constructor(private serviceService: ServiceService) {}

ngOnInit(): void {
    this.getEquipes();
  }

  getEquipes(): void {
    this.serviceService.getEquipes().subscribe(
      (equipes: Equipe[]) => {
        this.equipes = equipes;
      },
      (error: any) => {
        console.error('Error fetching equipes:', error);
      }
    );
  }

addEquipe(): void {
  const emptyEquipe: Equipe = { teamName: '', teamLogo: '', teamTrainer: '', playerList: '' };
  this.serviceService.addEquipe(emptyEquipe).subscribe(() => {
    this.getEquipes();
  });
}

  updateEquipe(equipe: Equipe): void {
    this.serviceService.updateEquipe(equipe).subscribe(() => {
      this.getEquipes();
    });
  }

  deleteEquipe(teamName: string): void {
    this.serviceService.deleteEquipe(teamName).subscribe(() => {
      this.getEquipes();
    });
  }
}
