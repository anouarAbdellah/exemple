@extends('admin.app')
@section('content')

    <div class="inbox-head">
        <h3>Les produits</h3>
    </div>
    <div class="inbox-body">
        <div class="mail-option">


            <div class="btn-group">
                <a data-original-title="Refresh" data-placement="top" href="/admin/products" class="btn mini tooltips">
                    <i class=" fas fa-sync-alt"></i>
                </a>
            </div>
            <div class="btn-group">
                <a href="/admin/addproduct">
                    <button class="btn btn-outline-info">Ajouter un produit <i class="fa fa-plus"></i></button>
                </a>
            </div>

            {{ $products->links() }}
        </div>
        <table class="table table-striped">
            <thead>
                <th>Image</th>
                <th>Nom</th>
                <th>Nouveau prix</th>
                <th>ancien prix</th>
                <th>qté stock</th>
                <th>Modifier</th>
                <th>Supprimer</th>
                <th>Ajouter image</th>
            </thead>
            <tbody>
        @foreach($products as $product)
            <tr>
                <td><img src="/storage/images/{{ $product->image }}" style="width: 60px;"></td>
                <td><a href="/product/{{ $product->id }}">{{ $product->name }}</a></td>
                <td>{{ $product->new_price }}</td>
                <td>{{ $product->old_price }}</td>
                <td>{{ $product->stock }}</td>
                <td><a href="/admin/product/edit/{{ $product->id }}"><i class="fas fa-pencil-alt"></i></a></td>
                <td><a href="/admin/product/delete/{{ $product->id }}"><i class="fa fa-trash"></i></a></td>
                <td><a href="/admin/image/add/{{ $product->id }}"><i class="fa fa-plus"></i></a></td>
            </tr>
        @endforeach
            </tbody>
        </table>
    </div>
    <script>
        $("#products-li").addClass("active");
    </script>
@endsection