import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const BlogPagination = ({ pages, setFilter, filter }) => {
  const LoopPagination = () => {
    let array = [];
    for (let index = 1; index <= pages; index++) {
      array.push(
        <PaginationItem active={filter.page===index}>
          <PaginationLink onClick={()=>setFilter({...filter,page:index})}>{index}</PaginationLink>
        </PaginationItem>
      );
    }
    return array;
  };

  const maxPage = ()=>{
    if(filter.page === pages){
      return;
    } else {
      setFilter({...filter,page:filter.page+1})
    }
  }

  const minPage = ()=>{
    if(filter.page === 1){
      return;
    } else {
      setFilter({...filter,page:filter.page-1})
    }
  }
  return (
    <div>
      <Pagination>
        <PaginationItem>
          <PaginationLink first onClick={()=>setFilter({...filter,page:1})} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  previous onClick={()=>minPage()}/>
        </PaginationItem>
        {LoopPagination()}
        <PaginationItem>
          <PaginationLink  next onClick={()=>maxPage()}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last first onClick={()=>setFilter({...filter,page:5})}/>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
