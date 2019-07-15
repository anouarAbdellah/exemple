@extends('admin.app')
@section('content')
    <div class="inbox-head">
        <h3>Ajouter un produit</h3>
    </div>
    <div class="container pt-5">
        <div class="container">
            <table class="table table-bordered">
                <tbody>
                    @foreach($images as $image)
                        <tr>
                            <td><img src="/storage/images/{{ $image->path }}" style="width: 100px;"></td>
                            <td><a href="/admin/image/delete/{{ $image->id }}/{{ $id }}"><i class="fa fa-trash"></i></a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        @include('flash-messages')
        {!! Form::open(['url'=>'admin/image/add/'.$id,'enctype'=>'multipart/form-data']) !!}
        <div class="form-group">
            {!! Form::label('image','Image :') !!}
            {!! Form::file('image',['class'=>'form-control','required'=>'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Ajouter',['class'=>'btn btn-outline-info form-control']) !!}
        </div>
        {!! Form::close() !!}
    </div>
    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'article-ckeditor' );
    </script>
@endsection