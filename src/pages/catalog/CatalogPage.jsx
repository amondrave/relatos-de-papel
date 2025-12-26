import { useState } from "react";
import "./catalog.css";
import catalog_list from "../../utilities/catalog_list.json";
import CatalogItem from "./CatalogItem";
import Pagination from "../../components/shared/Pagination";

export default function CatalogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentPageData = catalog_list.pages.find(page => page.page === currentPage);
    const itemsToDisplay = currentPageData ? currentPageData.items : [];

    return (
        <div className="catalog-container">
            <div className="row h-100">
                <div className="col col-md-3 border-end filter-form">
                    <h5>Filtros</h5>
                    <form className="mb-3">
                        <label className="form-label">Rango de precio</label>
                        <input type="range" className="form-range" min="0" max="100" step="1" />
                        <div className="d-flex justify-content-between">
                            <span>0</span>
                            <span>100</span>
                        </div>
                    </form>
                    <form className="mb-3">
                        <label className="form-label">Categorías | Generos</label>
                        <select className="form-select">
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                            <option value="3">Categoría 3</option>
                        </select>
                    </form>
                    <form className="mb-3">
                        <label className="form-label">Fecha de publicación</label>
                        <input type="date" className="form-control" />
                    </form>
                </div>
                <div className="col col-md-9">
                    <form className="mb-3 d-flex gap-2">
                        <input type="search" name="search" id="search" className="form-control" placeholder="Buscar libro, autor, etc..." />
                        <button className="btn btn-dark">
                            Buscar
                        </button>
                    </form>
                    <div className="catalog-list">
                        {itemsToDisplay.map((item) => (
                            <CatalogItem key={item.titulo} {...item} />
                        ))}
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={catalog_list.total_pages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}