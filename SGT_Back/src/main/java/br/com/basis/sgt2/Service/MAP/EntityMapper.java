package br.com.basis.sgt2.Service.MAP;

import java.util.List;


public interface EntityMapper<D, E> {

    E toEntity(D dto);

    D toDTO(E entity);

    List <E> toEntity(List<D> DTOList);

    List <D> toDTO(List<E> entityList);
}