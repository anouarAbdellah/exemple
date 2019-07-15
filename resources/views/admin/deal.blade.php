@extends('admin.app')
@section('content')
    <div class="inbox-head">
        <h3>Les commandes</h3>
    </div>
    <div class="inbox-body">
    <div class="container">
        <div class="row">
            <table class="col-md-12">
                <tbody>
                <tr><td><strong>Email : </strong>{{ $deal->email }}</td></tr>
                <tr><td><strong>Numero de telephone : </strong>{{ $deal->phone }}</td></tr>
                <tr><td><strong>Date : </strong>{{ $deal->created_at }}</td></tr>
                </tbody>
            </table>
            <div class="col-md-12">
                    <table class="table table-bordered">
                        <thead>
                            <th>nom</th>
                            <th>quantité</th>
                            <th>prix</th>
                            <th>prix total</th>
                            <th>total</th>
                        </thead>
                        <tbody>
                            @foreach($deal->products as $product)
                                <tr>
                                    <td><a href="/product/{{ $product->id }}" target="_blank">{{ $product->name . $product->pivot->qty }}</a> </td>
                                    <td>{{ $product->pivot->qty }}</td>
                                    <td>{{ $product->new_price }}Dhs</td>
                                    <td>{{ $product->new_price * $product->pivot->qty }}Dhs</td>
                                    <td></td>
                                </tr>
                            @endforeach
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{{ $total }}Dhs</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
    </div>
@endsection