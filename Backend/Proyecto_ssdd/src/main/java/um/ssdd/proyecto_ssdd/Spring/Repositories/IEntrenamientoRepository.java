package um.ssdd.proyecto_ssdd.Spring.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import um.ssdd.proyecto_ssdd.Spring.Entities.Entrenamiento;

public interface IEntrenamientoRepository extends MongoRepository<Entrenamiento, String> {

}
