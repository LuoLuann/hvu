package br.edu.ufape.hvu.repository;

import java.util.List;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.edu.ufape.hvu.model.Medico;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {

	

}